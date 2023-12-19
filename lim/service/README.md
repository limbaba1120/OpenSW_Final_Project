## 로드밸런서
> 로드밸런서를 사용하려면 이미 구현해 둔 서비스업체의 도움을 받아 쿠버네티스 클러스터 외부에 구현해야 한다.
> 
> 로드밸런서를 제공하는 MetalLB 사용.

---
- MetalLB에 필요한 요소가 모두 설치되고 독립적인 네임스페이스(metallb-system)도 함께 만들어진다
  
$ kubectl apply -f ~/OpenSW_Final_Project/lim/service/metallb.yaml
- MetalLB 설정 적용. ConfigMap 사용한다, 설정이 정의된 포맷.

$ kubectl apply -f ~/OpenSW_Final_Project/lim/service/metallb-l2config.yaml

## 결과

![Untitled](https://github.com/limbaba1120/OpenSW_Final_Project/assets/102224840/fac5cd4b-b820-4df1-8d34-776e0f5fb47b)
![Untitled (1)](https://github.com/limbaba1120/OpenSW_Final_Project/assets/102224840/8f1da9e3-74d5-4e45-99c9-fb46a52ec66b)
