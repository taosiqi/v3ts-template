#!/bin/bash

url="https://codeload.github.com/taosiqi/v3ts-template/tar.gz/"
array=(${1//// })
tagName=${array[2]}
echo $tagName
projectState=''
projectDirectory=''
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

echo "下载中"
wget  $url$tagName
echo "解压中"
tar -zxvf $tagName
echo "打开项目目录"
cd "v3ts-template-"$tagName
echo '替换变量为'$projectState
echo "projectState: $projectState," > temp_state.txt
sed -i "20s/projectState:.*/`cat temp_state.txt`/g" ./src/config/index.js
rm -rf temp_state.txt
sed -n 20p ./src/config/index.js
echo "替换完成，开始使用yarn构建项目"
yarn
chmod -R 777 node_modules
yarn run build
echo "项目构建完毕，删除原目录文件"
rm -rf $projectDirectory"*"
echo "删除完成，复制目录"
cp -R dist/* $projectDirectory
echo "打包完毕"
echo "清理目录"
cd ../
rm -rf "./"$tagName
rm -rf "./v3ts-template-"$tagName
echo "部署完成"




