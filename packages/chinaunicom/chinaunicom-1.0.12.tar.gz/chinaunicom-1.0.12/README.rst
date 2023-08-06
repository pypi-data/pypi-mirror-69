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

         # 申请资源
	mysql = Mysql()
	 
	#执行语句
	sqlAll = "SELECT * FROM BMS_ROLE"
	
	#返回结果
	result = mysql.getAll(sqlAll)
	
	#打印
	print ("mysql")

例2
-------
	配置说明:
	
	PROJECT_NAME = 项目根目录
    LOG_PATH_DIR = 日志位置
    LOG_FORMATTER = 日志格式化
    LOG_LEVEL = 日志级别
    LOG_SPLIT_TIMES = 日志分割：D:按天分割；H:按小时分割；M:按分钟分割
    CONFIG 为上述配置的字典形式
    
         #加载日志
         
	m_logger=MyLogger(CONFIG)
	 
	#打印日志
	m_logger.ERRORLog("自定义内容")
	
	
	
	

Licence
-------

GPL v3 or any later version

Author
------

wangruomeng
