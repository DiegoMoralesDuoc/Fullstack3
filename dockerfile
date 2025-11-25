# Etapa de build
FROM eclipse-temurin:17-jdk AS build
WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
RUN ./mvnw dependency:resolve

COPY src src
RUN ./mvnw package -DskipTests

# Etapa de runtime
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copia el .jar generado
COPY --from=build /app/target/*.jar app.jar

# Copia la wallet ZIP al contenedor
COPY Wallet_DiegoMoralesAlfaroBD /app/wallet

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
