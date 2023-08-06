# -*- coding: utf-8 -*-
# @Author: yongfanmao
# @Date:   2020-05-25 17:10:22
# @E-mail: maoyongfan@163.com
# @Last Modified by:   yongfanmao
# @Last Modified time: 2020-05-28 14:30:52
import time

def checkServerStatus(remoteServer,service_name,status,coverageLog):
	command = "cd /workspace/carkey/{service_name}/latest;./init.script status".format(service_name=service_name)
	result = remoteServer.exec_command(command=command)
	print(result)
	if status in result[0]:
		record = coverageLog(data=
				{
					"operationType": "检查服务器状态是否符合预期",
					"message": str(result),
					"remark": status,
					"typeInfo": "覆盖率桥接",
					"status":1
				})					
		record.is_valid(raise_exception=True)
		record.save()
		return True
	else:
		return False

class OperateServer(object):
	def __init__(self,remoteServer):
		"""
			操作远程服务器
		"""
		self.remoteServer = remoteServer

	def restartServer(self,service_name,coverageLog):
		stopCommandList = ["sudo su - deploy\n",
		"sudo su\n",
		"cd /workspace/carkey/{service_name}/latest\n".format(service_name=service_name),
		"sudo ./init.script stop\n"]

		stopResult = self.remoteServer.exec_command(command=stopCommandList,
			func=checkServerStatus,remoteServer=self.remoteServer,
			service_name=service_name,status="stopped",coverageLog=coverageLog)
		record = coverageLog(data=
				{
					"operationType": "统计静态代码停止服务器结果",
					"message": stopResult,
					"typeInfo": "覆盖率桥接",
					"status":1
				})					
		record.is_valid(raise_exception=True)
		record.save()

		
		# time.sleep(5)
		startCommandList = ["sudo su - deploy\n",
		"sudo su\n",
		"cd /workspace/carkey/{service_name}/latest\n".format(service_name=service_name),
		"sudo ./init.script start\n"]

		restartResult = self.remoteServer.exec_command(command=startCommandList,
			func=checkServerStatus,remoteServer=self.remoteServer,
		service_name=service_name,status="running",coverageLog=coverageLog)		
		return restartResult

	def addJacocoArg(self,service_name,port):
		commandList = ["sudo su - deploy\n",
		"cd /workspace/carkey/{service_name}/latest\n".format(service_name=service_name),
		"""sudo sed -i -e '1i START_OPTS="$START_OPTS -javaagent:/usr/local/jacoco/jacocoagent.jar=includes=*,output=tcpserver,address=*,port={port},append=true"' init.script\n""".format(
			port=port)]
		result = self.remoteServer.exec_command(command=commandList)
		return result

	def filter_jar(self,service_name,jarName,islib=True):
		if islib:
			command = "/workspace/carkey/{service_name}/latest/lib;ls|grep {jarName}".format(
				service_name=service_name,
				jarName=jarName)
		else:
			command = "/workspace/carkey/{service_name}/latest;ls|grep {jarName}".format(
				service_name=service_name,
				jarName=jarName)

		result = self.remoteServer.exec_command(command=command)
		print (result)


	def download_lib(self,service_name,jar,islib=True):
		if islib:
			remote_path = "/workspace/carkey/{service_name}/latest/lib/{jar}".format(
				service_name=service_name,jar=jar)
		else:
			remote_path = "/workspace/carkey/{service_name}/latest/{jar}".format(
				service_name=service_name,jar=jar)


	def __del__(self):
		self.remoteServer.close()


