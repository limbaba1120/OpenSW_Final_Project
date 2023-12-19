## 로드밸런서
> 로드밸런서를 사용하려면 이미 구현해 둔 서비스업체의 도움을 받아 쿠버네티스 클러스터 외부에 구현해야 한다.
> 
> 로드밸런서를 제공하는 MetalLB 사용.

---
- MetalLB에 필요한 요소가 모두 설치되고 독립적인 네임스페이스(metallb-system)도 함께 만들어진다
  
$ kubectl apply -f ~/OpenSW_Final_Project/lim/service/metallb.yaml
- MetalLB 설정 적용. ConfigMap 사용한다, 설정이 정의된 포맷.

$ kubectl apply -f ~/OpenSW_Final_Project/lim/service/metallb-l2config.yaml

