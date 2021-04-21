# gradle5

## lombok

```build.gradle
  dependencies {
        annotationProcessor 'org.projectlombok:lombok'
        implementation 'org.projectlombok:lombok'
        testAnnotationProcessor 'org.projectlombok:lombok'
        testImplementation 'org.projectlombok:lombok'
    }
    configurations {
        compileOnly {
            extendsFrom annotationProcessor
        }
    }
```
