�������߰�
============

| �ʺ����ֿ��ٲ���һЩ��������

��ΰ�װ
------------

python setup.py install

~~~~~~~~~~~~

�˹���������������:

-  MySQLdb see https://github.com/farcepest/MySQLdb1
-  DBUtils see https://cito.github.io/DBUtils/


���ʹ��
~~~~~~~~~~~~

��1
-------

         # ������Դ
	mysql = Mysql()
	 
	#ִ�����
	sqlAll = "SELECT * FROM BMS_ROLE"
	
	#���ؽ��
	result = mysql.getAll(sqlAll)
	
	#��ӡ
	print ("mysql")

��2
-------
	����˵��:
	
	PROJECT_NAME = ��Ŀ��Ŀ¼
    LOG_PATH_DIR = ��־λ��
    LOG_FORMATTER = ��־��ʽ��
    LOG_LEVEL = ��־����
    LOG_SPLIT_TIMES = ��־�ָD:����ָH:��Сʱ�ָM:�����ӷָ�
    CONFIG Ϊ�������õ��ֵ���ʽ
    
         #������־
         
	m_logger=MyLogger(CONFIG)
	 
	#��ӡ��־
	m_logger.ERRORLog("�Զ�������")
	
	
	
	

Licence
-------

GPL v3 or any later version

Author
------

wangruomeng
