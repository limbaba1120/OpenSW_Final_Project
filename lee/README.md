간단한 웹 서비스 예제
로컬에서 빌드(Docker) 하고 배포(k8s) 하는 방법

---

이동 [ /lee/RockPaperScissors ]

$ docker build -t rps-oss:1.0 .
$ docker run -d -p 9090:80 rps-oss:1.0

---

이동 [ /lee/todo-app ]

$ docker build -t todo-oss:1.0 .
$ docker run -d -p 9091:80 todo-oss:1.0

---

이동 [ /lee/k8s ]

$ kubectl apply -f rps-dep000.yml
$ kubectl apply -f rps-ser000.yml

$ kubectl apply -f todo-dep000.yml
$ kubectl apply -f todo-ser000.yml

---

확인

$ kubectl get deployments
$ kubectl get services
$ kubectl get pods


삭제

$ kubectl delete deployment rps-deployment
$ kubectl delete deployment todo-deployment

$ kubectl services rps-service
$ kubectl services todo-service

$ docker rmi rps-oss:1.0
$ docker rmi todo-oss:1.0