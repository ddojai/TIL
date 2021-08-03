# issue

## SpringData MongoDB 3.0
- https://recordsoflife.tistory.com/305
- SpringData MongoDB 3.0부터 자동 인덱스 생성이 기본적으로 꺼져 있음
- Spring Boot를 사용하는 경우 spring.data.mongodb.auto-index-creation 속성을 true로 설정

## RestAssured와 기본 생성자에 관련된 삽질
- https://dundung.tistory.com/202

## 스프링 부트 실행시 data.sql 테이블 not exist 에러 
- 하이버네이트 초기화 과정보다 data.sql 먼저 실행되도록 변경
- boot 2.5 이상 버전 사용 시 오류가 발생하면 application.yml(또는 properties) 에 아래 옵션 추가
- spring.jpa.defer-datasource-initialization: true
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes