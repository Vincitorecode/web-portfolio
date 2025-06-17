from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_navigation():
    options = Options()
    # options.add_argument("--headless")  # Descomenta para correr en modo invisible
    options.add_argument("--start-maximized")

    service = Service()  # Aquí puedes especificar el path del chromedriver si no está en PATH
    driver = webdriver.Chrome(service=service, options=options)

    try:
        driver.get("https://vincitorecode.github.io/web-portfolio/")
        wait = WebDriverWait(driver, 10)

        # Espera que el enlace "About" sea visible
        about = wait.until(
            EC.visibility_of_element_located((By.XPATH, "//a[contains(text(), 'About')]"))
        )
        assert about.is_displayed(), "'About' no está visible en la página."

        # Click en el enlace "Work"
        projects = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'Work')]"))
        )
        projects.click()

        # Espera que el contenedor con id 'work' esté presente
        wait.until(
            EC.presence_of_element_located((By.ID, "work"))
        )

    finally:
        driver.quit()
