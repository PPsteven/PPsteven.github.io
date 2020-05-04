## ELK 搭建

参考教程

docker 教程

https://elk-docker.readthedocs.io/#specific-version-combinations

错误大全

https://segmentfault.com/a/1190000019977725





https://github.com/deviantony/docker-elk#initial-setup



国内采坑https://blog.csdn.net/qq_39284787/article/details/78809538

https://blog.csdn.net/qq1031893936/article/details/93798646 这篇教程也不错





docker network ls

ifconfig

https://www.imooc.com/article/23145

```
mkdir /etc/logstash
cd /etc/logstash
vim patterns_rex


docker run --rm -d  \
--name logstash    \
-v /etc/logstash/patterns_rex:/usr/local/logstash/patterns/rex \
-v /etc/logstash/logstash.conf:/usr/share/logstash/config/logstash.conf \
docker.elastic.co/logstash/logstash:6.6.2


-v /etc/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf


input {
    file {
        path     => ["//root/source/pujiangjiaoye/log/*.log"]
        type    => "log"
        start_position => "beginning"
    }
}

filter {  
    grok {  
      match => { "message" => ".+" }
    }  
} 
output {

    influxdb {
                     db => "influxdb中的数据库名"
                     host => "localhost"
                     port => "8086"
                     user => "你的账号"
                     password => "你的密码"
             coerce_values => {
                     "request" => "varchar"
                     "status" => "varchar"
               }
                    data_points => {
                                  "request" => "%{message}"

                    }

}

http://grok.51vagaa.com/






bin/logstash -e 'input{
         stdin{}
}
filter{
        grok{
          match => {
            "message" => ".+"
         }
        }
}
output{
        stdout{codec=>rubydebug}
}'


docker run -di --name=es --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v /etc/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml elasticsearch:6.6.1

http://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html
```





https://www.cnblogs.com/time-read/p/10981731.html

这篇文章很详细的介绍了如何Filebeat传入logstash



```
docker run -it -d -p 5044:5044 --name logstash --net somenetwork -v 
{path}/logstash.yml:/usr/share/logstash/config/logstash.yml -v {path}/conf.d/:/usr/share/logstash/conf.d/ 

# docker 最烦的是服务的配置文件不知道在什么地方，特别是这几个服务都有好几个配置文件地址的时候就更加烦，很多教程完全不一样。特别是当你决定有的服务用 docker 有时候不用的时候，教程会弄到你发疯。

logstash.yml (文件内容)

path.config: /usr/share/logstash/conf.d/*.conf
path.logs: /var/log/logstash
```





https://www.cnblogs.com/ssqq5200936/p/10815200.html



https://blog.csdn.net/u013063153/article/details/74108023