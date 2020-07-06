from django.test import TestCase, LiveServerTestCase
from datetime import date
from django.contrib.auth.models import User
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.support.wait import WebDriverWait
from django.urls import reverse
from .models import Cat, Feeding

# Create your tests here.
class CatTestCase(TestCase):

    # setup runs before every test is run
    # here we create a default cat in our DB for us to test against
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        Cat.objects.create(
            name='Default Cat',
            breed='Tabby',
            description='Chillin Cat',
            age=2,
            user=self.user
        )

    def test_cat_str_prints_name(self):
        cat = Cat.objects.get(name='Default Cat')
        self.assertEqual(cat.__str__(), 'Default Cat')

    # several test cases for the fed_for_today method to verify it works given different edge cases
    def test_not_fed_for_today_three_meals_in_past(self):
        cat = Cat.objects.get(name='Default Cat')
        Feeding.objects.create(date='2018-10-06', meal='B', cat=cat)
        Feeding.objects.create(date='2018-10-06', meal='L', cat=cat)
        Feeding.objects.create(date='2018-10-06', meal='D', cat=cat)        
        self.assertEqual(cat.fed_for_today(), False)

    def test_not_fed_for_today_two_meals_today(self):
        cat = Cat.objects.get(name='Default Cat')
        Feeding.objects.create(date=date.today(), meal='B', cat=cat)
        Feeding.objects.create(date=date.today(), meal='L', cat=cat)
        self.assertEqual(cat.fed_for_today(), False)

    def test_fed_for_today_all_three_meals_today(self):
        cat = Cat.objects.get(name='Default Cat')
        Feeding.objects.create(date=date.today(), meal='B', cat=cat)
        Feeding.objects.create(date=date.today(), meal='L', cat=cat)
        Feeding.objects.create(date=date.today(), meal='D', cat=cat)
        self.assertEqual(cat.fed_for_today(), True)

    def test_not_fed_for_today_three_meals_today_no_dinner(self):
        cat = Cat.objects.get(name='Default Cat')
        Feeding.objects.create(date=date.today(), meal='B', cat=cat)
        Feeding.objects.create(date=date.today(), meal='B', cat=cat)
        Feeding.objects.create(date=date.today(), meal='L', cat=cat)
        self.assertEqual(cat.fed_for_today(), False)

class FeedingTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        cat = Cat.objects.create(
            name='Default Cat',
            breed='Tabby',
            description='Chillin Cat',
            age=2,
            user=self.user
        )
        Feeding.objects.create(date=date.today(), meal='B', cat=cat)

    # demo how to test the meta options of particular fields
    # helpful to make sure people don't change it without considering the consequences
    def test_default_ordering(self):
        cat = Cat.objects.get(name='Default Cat')
        feeding = cat.feeding_set.first()
        self.assertEquals(feeding._meta.ordering[0], '-date')

    def test_feeding_date_label(self):
        cat = Cat.objects.get(name='Default Cat')
        feeding = cat.feeding_set.first()
        field_label = feeding._meta.get_field('date').verbose_name
        self.assertEquals(field_label, 'feeding date')

# very basic integration test to test the home view
class HomeViewTestCase(TestCase):
    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        # use reverse to also test that the url naming works
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

# test the cat list/index view, more involved since it is login protected
class CatIndexViewTest(TestCase):
    def setUp(self):
        self.test_user_pass = 'randoPASS'
        self.test_user = User.objects.create_user(username='testuser1', password=self.test_user_pass)        
        self.test_user.save()

    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('index'))
        self.assertRedirects(response, '/accounts/login/?next=/cats/')

    def test_logged_in_uses_correct_template(self):
        self.client.login(username=self.test_user.username, password=self.test_user_pass)
        response = self.client.get(reverse('index'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'cats/index.html')

    def test_cats_index_lists_cats(self):
        cat = Cat.objects.create(
            name='Default Cat',
            breed='Tabby',
            description='Chillin Cat',
            age=2,
            user=self.test_user
        )
        self.client.login(username=self.test_user.username, password=self.test_user_pass)
        response = self.client.get(reverse('index'))

        # Check that the context passed to our template has a list of cats under the 'cats' key
        self.assertQuerysetEqual(
            response.context['cats'],
            ['<Cat: Default Cat>']
        )

# LiveServerTestCase will actually use a server
# Selenium is used to launch a browser and automated user testing
class CatsIndexToDetail(LiveServerTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.selenium = WebDriver()
        # selenium will implicitly wait for 5 seconds while querying DOM if it doesn't find what it needs
        # helpful to wait to make sure DOM is always ready and test fails for right reason
        cls.selenium.implicitly_wait(5)
    @classmethod
    def tearDownClass(cls):
        # clean up selenium and stop server
        cls.selenium.quit()
        super().tearDownClass()

    def setUp(self):
        self.test_user = User.objects.create_user(username='testuser1', password='randoPASS')        
        self.test_user.save()

    # helper method to run a user through login process
    def login(self, username="testuser1", password="randoPASS", next_url=None):
        self.selenium.get('%s%s' % (self.live_server_url, '/accounts/login/'))
        username_input = self.selenium.find_element_by_name("username")
        username_input.send_keys(username)
        password_input = self.selenium.find_element_by_name("password")
        password_input.send_keys(password)
        if next_url:
            el = self.selenium.find_element_by_name("next")
            self.set_element_attribute(el, "value", next_url)

        self.selenium.find_element_by_css_selector("form").submit()
        WebDriverWait(self.selenium, 2).until(lambda driver: driver.find_element_by_tag_name('body'))

    def test_login(self):
        self.login()
        self.assertEqual(f'{self.live_server_url}/cats/', self.selenium.current_url)

    def test_click_on_cat_details(self):
        # create a cat for this user so we can click on it and visit details page
        cat = Cat.objects.create(
            name='Default Cat',
            breed='Tabby',
            description='Chillin Cat',
            age=2,
            user=self.test_user
        )
        self.login()
        # after user is logged in, the cats index should have a cat link displayed in their cat list
        cat_link = self.selenium.find_element_by_xpath('/html/body/main/a[1]')
        # get the link and click it
        cat_link.click()
        WebDriverWait(self.selenium, 2).until(lambda driver: driver.find_element_by_tag_name('body'))
        # after waiting for the new page to load, we check to make sure we went to the right page
        self.assertEqual(f'{self.live_server_url}/cats/{cat.id}/', self.selenium.current_url)
