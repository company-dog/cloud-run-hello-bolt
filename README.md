# Slack Bolt App on Cloud Run

## Setup gcloud

```sh
gcloud auth login
```

```sh
gcloud init
```

```sh
gcloud projects list
```

```sh
PROJECT_ID=xxxxx
gcloud config set project $PROJECT_ID
```

## Build Dockerfile

`Dockerfile`を含むディレクトリから次のコマンドを実行し、Cloud Build を使用してコンテナ イメージをビルドする。

```sh
gcloud builds submit --tag gcr.io/$PROJECT_ID/hello-bolt
```

## Deploy to Cloud Run

次のコマンドを使用して Cloud Run にデプロイする。  
成功すると、コマンドラインにサービス URL が表示される

```sh
gcloud beta run deploy --image gcr.io/$PROJECT_ID/hello-bolt \
    --set-env-vars SLACK_BOT_TOKEN=xoxb-xxxxxxxxx,SLACK_SIGNING_SECRET=XXXXXXXXXXXXXXXXXXXXXXX

Please choose a target platform:
 [1] Cloud Run (fully managed)
 [2] Cloud Run for Anthos deployed on Google Cloud
 [3] Cloud Run for Anthos deployed on VMware
 [4] cancel
Please enter your numeric choice:  1


Service name (hello-bolt):  hello-bolt
API [run.googleapis.com] not enabled on project [653303504306]. Would
you like to enable and retry (this will take a few minutes)? (y/N)?  y

Enabling service [run.googleapis.com] on project [653303504306]...

Please specify a region:
 [1] asia-east1
 [2] asia-northeast1
 [3] asia-northeast2
 [4] asia-southeast1
 [5] australia-southeast1
 [6] europe-north1
 [7] europe-west1
 [8] europe-west4
 [9] northamerica-northeast1
 [10] us-central1
 [11] us-east1
 [12] us-east4
 [13] us-west1
 [14] cancel
Please enter your numeric choice:  2

Allow unauthenticated invocations to [hello-bolt] (y/N)?  y
```

URL を忘れた場合に確認する方法

```
gcloud beta run services list

Please choose a target platform:
 [1] Cloud Run (fully managed)
 [2] Cloud Run for Anthos deployed on Google Cloud
 [3] Cloud Run for Anthos deployed on VMware
 [4] cancel
Please enter your numeric choice:  1

https://hello-bolt-r3fbwghd4q-an.a.run.app   SERVICE     REGION           URL                                         LAST DEPLOYED BY         LAST DEPLOYED AT
✔  hello-bolt  asia-northeast1  https://hello-bolt-r3fbwghd4q-an.a.run.app  naruhodo.u1az@gmail.com  2020-08-30T11:46:39.874460Z
```
