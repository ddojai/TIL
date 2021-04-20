# Annotation

## Contoller

### @RestController
* 컨트롤러를 JSON을 반환하는 컨트롤러로 만들어 준다.
* @ResponseBody를 각 메소드마다 선언했던 것을 한번에 사용할 수 있게 해준다.

### @GetMapping
* HTTP Method인 Get의 요청을 받을 수 있는 API를 만들어 줍니다.
* 예전에는 @RequestMapping(method = RequestMethod.GET)으로 사용되었음.

### @RequestParam
* 외부에서 API로 넘긴 파라미터를 가져오는 어노테이션

### @Transactional(readOnly = true)
* 트랜잭션 범위는 유지하되, 조회 기능만 남겨두어 조회 속도 개선

## Test

### @RunWith(SpringRunner.class)
* 테스트를 진행할 때 JUnit에 내장된 실행자 외에 다른 실행자를 실행시킵니다.
* 여기서는 SpringRunner라는 스프링 실행자를 사용합니다.
* 즉, 스프링 부트 테스트와 JUnit사이에 연결자 역할을 합니다.

### @WebMvcTest
* 여러 스프링 테스트 어노테이션 중, Web(Srping MVC)에 집중할 수 있는 어노테이션 입니다.
* 선언할 경우 @Controller, @ControllerAdvice 등을 사용할 수 있습니다.
* 단, @Service, @Component, @Repository 등은 사용할 수 없습니다.
* JPA 기능이 작동하지 않음

### @Autowired
* 스프링이 관리하는 빈(Bean)을 주입 받습니다.

### @org.junit.After
* Junit에서 단위 테스트가 끝날 때마다 수행되는 메소드를 지정
* 보통은 배포 전 전체 테스트를 수행할 때 테스트간 데이터 침범을 막기 위해 사용
* 여러 테스트가 동시에 수행되면 테스트용 데이터베이스인 H2에 데이터가 그대로 남아 있어 다음 테스트 실행 시 테스트가 실패할 수 있습니다.

## Entity

### @Entity
* 테이블과 링크될 클래스임을 나타냅니다.
* 기본값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭
  * ex) SalesManager.java -> sales_manager table

### @Id
* 해당 테이블의 PK 필드를 나타냅니다.

### @GeneratedValue
* PK의 생성 규칙을 나타냅니다.
* 기본값은 AUTO 로, MySQL의 auto_increment와 같이 자동증가하는 정수형 값이 됩니다.
* 스프링 부트 2.0에선 GenerationType.IDENTITY 옵션을 추가해야 auto_increment 적용 됨.
* https://jojoldu.tistory.com/295

### @Column
* 테이블의 컬럼을 나타내면, 굳이 선언하지 않더라도 해당 클래스의 필드는 모두 컬럼이 됩니다.
* 사용하는 이유는, 기본값 외에 추가로 변경이 필요한 옵션이 있을경우 사용합니다.
* 문자열의 경우 VARCHAR(255)가 기본값인데, 사이즈를 500으로 늘리고 싶거나, 타입을 TEXT로 변경하고 싶거나 등의 경우에 사용됩니다.

### @MappedSuperclass
* JPA Entity 클래스들이 해당 클래스를 상속할 경우 필드들도 컬럼으로 인식하도록 합니다.

### @EntityListeners(AuditingEntityListener.class)
* 클래스에 Auditing 기능을 포함시킵니다.

### @CreatedDate
* Entity가 생성되어 저장될 때 시간이 자동 저장됩니다.

### @LastModifiedDate
* 조회한 Entity의 값을 변경할 때 시간이 자동 저장됩니다.

## Lombok

### @Getter
* 선언된 모든 필드의 get 메소드를 생성

### @lombok.RequiredArgsConstructor
* 선언된 모든 final 필드가 포함된 생성자를 생성해 줍니다.
* final이 없는 필드는 생성자에 포함되지 않습니다.

### @NoArgsConstructor
* 기본 생성자 자동 추가
* access = AccessLevel.PROTECTED : 기본생성자의 접근 권한을 protected로 제한
* 생성자로 protected Posts() {}와 같은 효과
* Entity 클래스를 프로젝트 코드상에서 기본생성자로 생성하는 것은 막되, JPA에서 Entity 클래스를 생성하는것은 허용하기 위해 추가

### @Builder
* 해당 클래스의 빌더패턴 클래스를 생성
* 생성자 상단에 선언시 생성자에 포함된 필드만 빌더에 포함

### @Setter
* 자바빈 규약을 생각하면서 getter/setter를 무작적 생성하는 경우가 있음
  * 해당 클래스의 인스턴스 값들이 언제 어디서 변해야 하는지 코드상으로 명확하게 구분할 수가 없어, 차후 기능 변경 시 복잡
  * 그래서 Entity 클래스에서는 절대 Setter 메소드를 만들지 않는다
* Controller에서 @RequestBody로 외부에서 데이터를 받는 경우엔 기본생성자 + set메소드를 통해서만 값이 할당
* 이때만 setter를 허용

### @lombok.AllArgsConstructor
* 해당 클래스의 의존성 관계가 변경될 때 마다 생성자 코드를 계속해서 수정하는 번거로움을 해결