# Django数据库迁移优化，支持写入表注释及字段注释（目前只完善MySQL）


## 使用示例

```
# 修改django配置文件 ENGINE 为 django_kelove_db.backends.mysql

DATABASES = {
    'default': {
        'ENGINE': 'django_kelove_db.backends.mysql',
        'NAME': 'test',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '127.0.0.1',
        'PORT': 3306,
    }
}
```
