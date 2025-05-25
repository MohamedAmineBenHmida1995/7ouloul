FROM maven:3.9.5-eclipse-temurin-17 as build
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /build/target/quarkus-app/ ./quarkus-app/
EXPOSE 8081
CMD ["java", "-jar", "quarkus-app/quarkus-run.jar"]
