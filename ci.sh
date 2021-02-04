#!/bin/bash
#ci脚本放到服务器root目录下
#sed -i "s/\r//" ./ci.sh  解决错误/bin/bash^M: bad interpreter: No such file or directory
url="https://codeload.github.com/taosiqi/v3ts-template/tar.gz/"
array=(${1//// })
tagName=${array[2]}
echo "tagName为"$tagName
#项目配置名
projectState=''
#项目部署目录
projectDirectory=''
#匹配对应的目录和配置名
if [[ $tagName == *develop* ]]
then
  projectState='devState'
  projectDirectory="/www/wwwroot/dev.input520.cn/"
elif [[ $tagName == *staging* ]]
then
 projectState='testState'
 projectDirectory="/www/wwwroot/test.input520.cn/"
elif [[ $tagName == *release* ]]
then
 projectState='prodState'
 projectDirectory="/www/wwwroot/prod.input520.cn/"
fi

echo "开始下载"
wget  $url$tagName
echo "解压项目"
tar -zxvf $tagName
echo "打开项目目录"
cd "v3ts-template-"$tagName
echo '替换projectState值为'$projectState
echo "projectState: $projectState," > temp_state.txt
sed -i "20s/projectState:.*/`cat temp_state.txt`/g" ./src/config/index.js
rm -rf temp_state.txt
sed -n 20p ./src/config/index.js
echo "替换完成，开始使用npm构建项目"
npm install
chmod -R 777 node_modules
npm run build
echo "项目构建完毕，删除原目录文件"
rm -rf $projectDirectory"*"
echo "删除完成，复制项目到部署目录"
cp -R dist/* $projectDirectory
echo "部署完成，开始清理目录"
cd ../
rm -rf "./"$tagName
rm -rf "./v3ts-template-"$tagName
echo "清理完成，流程结束"
