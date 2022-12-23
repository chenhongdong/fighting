# 创建typescript配置文件
`npx tsconfig.json`


# 安装依赖
```
# 项目依赖
npm i express sequelize mysql2 morgan http-errors http-status-codes -S
# 开发依赖
npm i cross-env typescript @types/express @types/morgan @types/http-errors ts-node-dev ts-node nyc mocha @types/mocha chai @types/chai chai-http -D
```

# 编译方式
```
# 两种编译方式都可以
"start": "cross-env PORT=8000 ts-node-dev --respawn ./src/bin/www.ts",
"dev": "cross-env PORT=8000 nodemon --exec ts-node --files ./src/bin/www.ts"
```


# Restful接口
- REST就是用 `URI` 表示资源，用HTTP方法(GET,POST,PUT,DELETE) 表示对这些资源做什么操作

| 方法 |  路径|  名称
| --- | --- | --- 
|  GET  | /users  | 查看用户列表
|  GET  | /users/:id  | 查看单个用户
|  POST  | /users  | 添加用户
|  PUT  | /users/:id  | 修改单个用户
|  DELETE  | /users/:id  | 删除单个用户



# docker部署在阿里云ECS服务器上

## 安装docker
```
yum install -y yum-utils device-mapper-persistent-data lvm2


yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

### 安装docker
yum install -y docker-ce docker-ce-cli containerd.io
```

## 阿里云加速
```
mkdir -p /etc/docker

### 写入文件
tee /etc/docker/daemon.json <<- 'EOF'
{
    "registry-mirrors": ["https://fwvjnv59.mirror.aliyuncs.com"]
}
EOF
### 重载所有修改过的配置文件
systemctl daemon-reload
systemctl restart docker
```

# 安装git
`yum install git -y`