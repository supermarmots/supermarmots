## 몽고DB 셸 명령어

### 실행

```shell
mongosh
```

### DB 목록 조회하기

```shell
show dbs
```

### DB 선택하기 & 생성하기

DB가 있으면 사용하고 없으면 생성된다.

```shell
use local
```

### 사용중인 DB 이름 보기

```shell
db
```

### 데이터 조회, 추가, 수정, 삭제

몽고DB 셸에서는 다양한 메서드를 통해 데이터를 조회, 추가, 수정, 삭제할 수 있습니다. 주요 명령어와 설명은 아래와 같습니다.

- **find()**  
  컬렉션에서 문서를 조회합니다.

  ```shell
  db.users.find({ age: { $gte: 20 } })
  ```

  조건에 맞는 모든 문서를 반환합니다.

- **insertOne() / insertMany()**  
  하나 또는 여러 개의 문서를 컬렉션에 추가합니다.

  ```shell
  db.users.insertOne({ name: "홍길동", age: 30 })
  db.users.insertMany([{ name: "김영희" }, { name: "이철수" }])
  ```

- **updateOne() / updateMany()**  
  하나 또는 여러 개의 문서를 수정합니다.

  ```shell
  db.users.updateOne({ name: "홍길동" }, { $set: { age: 31 } })
  db.users.updateMany({}, { $set: { isActive: true } })
  ```

- **deleteOne() / deleteMany()**  
  하나 또는 여러 개의 문서를 삭제합니다.

  ```shell
  db.users.deleteOne({ name: "홍길동" })
  db.users.deleteMany({ age: { $lt: 25 } })
  ```

- **sort()**  
  조회 결과를 정렬합니다.

  ```shell
  db.users.find().sort({ age: -1 })
  ```

  age 기준 내림차순 정렬.

- **countDocuments()**  
  조건에 맞는 문서의 개수를 반환합니다.

  ```shell
  db.users.countDocuments({ isActive: true })
  ```

- **findOne()**  
  조건에 맞는 첫 번째 문서를 반환합니다.
  ```shell
  db.users.findOne({ name: "홍길동" })
  ```

## 몽고DB shell 실습문제

1. 사용자 3명 데이터를 inserOne/insertMany로 삽입

```shell

db.users.insertOne({
  name: "홍길동",
  age: 30,
  email: "hong@example.com"
});


db.users.insertMany([
  { name: "김영희", age: 24, email: "kim@example.com" },
  { name: "이철수", age: 27, email: "lee@example.com" }
]);
```

2. 나이가 26세 이상인 사용자만 조회 (정렬 + 일부 필드만 표시)

```shell
db.user.find({ age : {$gte: 26}}, { name: 1, age: 1}).sort({age: -1})
```

3. 특정 사용자의 이메일 수정

```shell
db.user.updateOne({name:"John"}, {$set: {name:"John2"}})
```

4. 전체 사용자에게 isActive: true 필드 추가

```shell
db.user.updateMany({}, {$set: {isActive: true}})
```

5. 25세 미만 사용자는 삭제

```shell
db.users.deleteMany(
  { age: { $lt: 25 } }
);
```
