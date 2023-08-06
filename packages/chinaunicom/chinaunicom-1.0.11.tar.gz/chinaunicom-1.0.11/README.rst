基础工具包
============

| 适合新手快速部署一些基础工具

如何安装
------------

python setup.py install

~~~~~~~~~~~~

此工具依赖的其他包:

-  MySQLdb see https://github.com/farcepest/MySQLdb1
-  DBUtils see https://cito.github.io/DBUtils/


如何使用
~~~~~~~~~~~~

例1
-------

::

         # 申请资源
	mysql = Mysql()
	 
	#执行语句
	sqlAll = "SELECT * FROM BMS_ROLE"
	
	#返回结果
	result = mysql.getAll(sqlAll)
	
	#打印
	print ("mysql")

Licence
-------

GPL v3 or any later version

Author
------

wangruomeng
