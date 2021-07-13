# Issue

## mac 에서 composer로 프로젝트 생성시 intl warning 발생

1. Brew의 PHP를 사용하지 않을 경우

- Brew의 PHP 7.1, 7.2 및 7.3 기본적으로 모두 INTL이 활성화

```bash
$ ls -l $(which php)
-rwxr-xr-x 1 11169664 Mar 21 07:09 /usr/bin/php

$ brew list | grep php
```

2. Homebrew의 PHP 설치

```bash
$ brew install php@7.3
```

3. Homebrew의 PHP 연결

```bash
$ brew link --force php@7.3
```

4. 설치 확인

```bash
$ ls -l $(which php)
-r-xr-xr-x  1 heungyeol  admin  14326488  4 19 18:40 /usr/local/opt/php@7.3/bin/php

$ php -i | grep -i intl
```

## docker 환경에서 phpstorm phpunit 설정이 안될 때
- docker desktop
  - preferences -> general -> Use gRPC FUSE for file sharing 체크 해제
- phpstorm
  - remote cli 다시 설정

### 출처

- [https://www.python2.net/questions-120117.htm](https://www.python2.net/questions-120117.htm)
