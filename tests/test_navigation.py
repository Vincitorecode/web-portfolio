from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Abre navegador
driver = webdriver.Chrome()
driver.get("https://vincitorecode.github.io/web-portfolio/")

# Espera a que cargue
time.sleep(2)

# Verifica que "About Me" esté visible
about = driver.find_element(By.XPATH, "//*[contains(text(), 'About Me')]")
assert about.is_displayed()

# Haz click en "Projects"
projects = driver.find_element(By.XPATH, "//*[contains(text(), 'Projects')]")
projects.click()

# Espera un poco para ver cambio visual (si aplica scroll)
time.sleep(1)

# Cierra navegador
driver.quit()
