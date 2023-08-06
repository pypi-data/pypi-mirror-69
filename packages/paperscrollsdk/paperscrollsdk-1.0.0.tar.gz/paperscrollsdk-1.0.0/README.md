# PaperScroll SDK для Python3.6+
**PaperScroll SDK для Python3.6+** простая реализация методов API PaperScroll

[Документация PaperScroll API](https://paperscroll.docs.apiary.io)

### Установка

```js
$ pip install paperscrollsdk
```

### Пример использования

```python
from paperscrollsdk import PaperScroll

paperClient = PaperScroll(merchant_id, "access_token")
paperApi = paperClient.getApi()

someMerchants = paperApi.getMerchants()
print(someMerchants)
```

### Баги и PR
Репозиторий открыт для изменений! Если вы заметили какую-то ошибку связанную с кодом, откройте ***Issue*** и если знаете, как эту ошибку решить, открывайте ***Pull Request***