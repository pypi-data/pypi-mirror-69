import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Адрес для создания задачи
create_task_url = "https://api.anti-captcha.com/createTask"
# Адрес для получения ответа
get_result_url = "https://api.anti-captcha.com/getTaskResult"
# ключ приложения
app_key = "867"

"""
Параметры для callback
"""
# IP для работы callback`a
HOST = "https://pythoncaptcha.cloud/"
# PORT для работы callback`a
PORT = 8001
# данные для подключения к RabbitMQ на callback сервере
RTMQ_USERNAME = "hardworker_1"
RTMQ_PASSWORD = "password"
RTMQ_HOST = "https://pythoncaptcha.cloud/"
RTMQ_PORT = 5672
RTMQ_VHOST = "anticaptcha_vhost"
