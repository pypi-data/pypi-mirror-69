# README

## Bookmarks

- https://stackoverflow.com/questions/23058663/where-are-logs-in-spark-on-yarn

## YARN logs

In YARN terminology, executors and application masters run inside “containers”.

If log aggregation is turned on (with the `yarn.log-aggregation-enable` config), container logs are copied to HDFS and deleted on the local machine.

These logs can be viewed from anywhere on the cluster with the yarn logs command.

`yarn logs -applicationId <app ID>`

note:

> The only thing you need to follow to get correctly working history server for Spark is to close your Spark context in your application. Otherwise, application history server does not see you as COMPLETE and does not show anything (despite history UI is accessible but not so visible).

On HDFS they are located can be found by looking at your YARN configs `yarn.nodemanager.remote-app-log-dir` and `yarn.nodemanager.remote-app-log-dir-suffix`

Helpfull question on [cloudera support question]https://community.cloudera.com/t5/Support-Questions/Yarn-log-history/m-p/164682/highlight/true#M127049

Yarn typically stores history of all the application in

- Mapreduce History server (only for Mapreduce jobs)
- Application Timeline Server ( all type of yarn applications).

```xml
<property>
  <name>yarn.timeline-service.enabled</name>
  <value>true</value>
</property>

```

```xml
<property>
<name>yarn.timeline-service.webapp.address</name>
<value>host1:8188</value>
</property>
```
