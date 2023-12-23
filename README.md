# 오픈소스SW 실습 팀 프로젝트
<img width="160" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/c4c44283-2ac7-47d7-9c60-01c40ddc93cb">

---

## Used Tool
<img src="https://img.shields.io/badge/virtualbox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/vagrant-1868F2?style=for-the-badge&logo=vagrant&logoColor=white"> <img src="https://img.shields.io/badge/kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white">
<img src="https://img.shields.io/badge/docker-326CE5?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white">
<img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">
<img src="https://img.shields.io/badge/redmine-D24939?style=for-the-badge&logo=redmine&logoColor=white">
<img src="https://img.shields.io/badge/git-E34F26?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">

---

## Members
- 임건우
- 이신행
- 김영중
- 안재홍

---

## Manifest File
[Redmine Manifest File Folder](./final/redmine/)

[WebService Manifest File Folder](./final/web/k8s/)

[Vagrant File Folder](./final/vagrant/)

[JenkinsFile Folder](./final/jenkins/build/)

## Introduce Project

#### ● 프로젝트 시나리오 

<img width="560" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/a666bc4f-238f-4ae1-9a68-305bd26e64b3">

1. 마스터 노드를 설정하고 jenkins 서비스 시작
2. 마스터 노드를 통해 워커 노드 제어
3. 워커 노드에서 웹 서비스 시작

#### ● VirtualBox에서 마스터 노드와 워커 노드 구성 

<img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/c40d2965-a2e4-47b7-8342-6cff3307f9bc"> <img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/54420e8c-706c-45d1-8111-d81cea0e54b8">


1. 마스터 노드와 워커 노드 VirtualBox를 구성
2. 마스터 노드와 워커 노드 join
3. 오른쪽 이미지를 통해 연결된 것을 확인할 수 있다 -> kubectl get node(확인 명령어)

#### ● Jenkins 서비스 시작

<img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/a4a8c8c3-cc4a-4cd7-ae9c-ff57957cda77"> <img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/bce73ccf-4d47-4f60-bf63-82d21726fc3b">

1. 마스터 노드에서 "kubectl get service jenkins" 명령어를 통해 jenkins 서비스 시작
2. External-IP에 나온 IP를 통해 접속하면 서비스가 시작된 jenkins를 확인할 수 있다.

#### ● Redmine 서비스 시작

<img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/a2e7fb39-ce4d-4d8e-91b0-b93d10a27e2b"> <img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/67fabe6a-e796-4c10-955d-f3ce72dd0ece">

1. kubectl apply -f <파일 이름> 을 통해 deployment와 service를 실행시킬 수 있다
2. 위의 명령어는 redmine과 mysql를 실행시킨 것이다
3. External IP통해 접속하면 서비스되는 redmine을 확인할 수 있다.

#### ● 웹 서비스 시작

<img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/a034c719-0995-4e4f-ae4c-78c7aab6e857"> <img width="480" src="https://github.com/limbaba1120/OpenSW_Final_Project/assets/116993837/d86d5a3a-f00a-4ac0-8bf8-bff8ef3f8db5">

1. 첫 번째 웹 서비스는 가위바위보를 하는 것으로 양쪽 다 랜덤으로 가위 바위 보의 결과를 낸다
2. 두 번째 웹 서비스는 To-Do List로 show/unshow를 통해 item list를 표시여부를 결정할 수 있다
