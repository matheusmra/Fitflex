# FitFlex

## 🏆 Reconhecimento Acadêmico

O FitFlex foi eleito o **melhor trabalho** da disciplina Trabalho Interdisciplinar II: Backend do semestre 2025/01, no curso de **Ciência da Computação** da **PUC Minas**, destacando-se pela inovação tecnológica, integração entre front-end e back-end, e aplicação prática de inteligência artificial.

## 🧠 Sobre o Projeto
O **FitFlex** é uma plataforma web inovadora desenvolvida no curso de **Ciência da Computação** da **PUC Minas**, com fins acadêmicos e foco em aprendizado prático. Seu objetivo é apoiar pessoas diabéticas e demais interessados na adoção de uma alimentação mais saudável e personalizada. O sistema oferece uma experiência completa, permitindo que os usuários:

- Busquem e filtrem receitas adequadas ao seu perfil nutricional
- Analisem rótulos de produtos alimentícios utilizando inteligência artificial, facilitando a identificação de ingredientes e a compatibilidade com restrições alimentares
- Criem e gerenciem perfis
- Favoritem receitas

---

## 👥 Alunos integrantes da equipe

- Alice Salim Khouri Antunes
- Felipe Henrique Oliveira Diniz
- Matheus de Almeida Moreira

## 👨‍🏫 Professores responsáveis

- Daniel de Oliveira Capanema
- Luciana Mara Freitas Diniz

---

## ⚙️ Como Rodar o Front-End (React)

Siga os passos abaixo para rodar o front-end do projeto localmente:

1. **Clone o repositório**
   ```bash
   git clone git@github.com:ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2025-1-g06-fitflex.git
   cd codigo/frontend
   ```
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```
4. **Abra o navegador e acesse:**
   ```
   http://localhost:3000
   ```

---

## ⚙️ Como Rodar o Back-End (Java Spring Boot)

Siga os passos abaixo para rodar o back-end do projeto localmente:

1. **Pré-requisitos**
   - Java 17 ou superior instalado
   - Maven instalado

2. **Acesse a pasta do back-end**
   ```bash
   cd Codigo
   ```

3. **Configure variáveis de ambiente**
   - Crie um arquivo `.env` na raiz do projeto **(não suba esse arquivo para o repositório!)** com o seguinte conteúdo, substituindo pelos seus dados:
     - **API_KEY:** chave de acesso ao serviço Azure OCR Vision ([portal Azure](https://portal.azure.com/) > Computer Vision > Keys and Endpoint)
     - **EMAIL_USERNAME:** seu e-mail do Gmail usado para envio
     - **EMAIL_PASSWORD:** **App Password** gerada no Google (não é sua senha normal, veja [como gerar](https://support.google.com/accounts/answer/185833?hl=pt-BR))

   ```env
   API_KEY=SuaApiKeyDoAzureOCRVision
   EMAIL_USERNAME=seuemail@gmail.com
   EMAIL_PASSWORD=suaAppPasswordDoGoogle
   ```

   > **Atenção:** Nunca compartilhe suas credenciais reais publicamente. O arquivo `.env` deve ser criado localmente e não deve ser versionado no Git.

4. **Configuração do banco de dados**

Antes de rodar o back-end, é necessário configurar a conexão com o banco de dados PostgreSQL.

Abra o arquivo:

```
Codigo/src/main/java/dao/DAO.java
```

E altere as seguintes linhas conforme o seu ambiente (local ou Azure):

```java
String driverName = "org.postgresql.Driver";  
String serverName = "SEU_SERVIDOR"; // Ex: localhost ou seu servidor na Azure
int porta = 5432;  
String mydatabase = "NOME_DO_SEU_BANCO"; 
String url = "jdbc:postgresql://" + serverName + ":" + porta + "/" + mydatabase;
String username = "SEU_USUARIO";  
String password = "SUA_SENHA";
```

- Para uso **local**, use `localhost` no `serverName` e os dados do seu banco local.
- Para uso na **Azure**, use o endereço do seu servidor, usuário e senha fornecidos pela Azure.

> **Importante:** Nunca compartilhe suas credenciais reais publicamente.

5. **Instale as dependências e rode o servidor**
   ```bash
   mvn clean install
   mvn exec:java --% -Dexec.mainClass=app.Aplicacao
   ```

6. **O back-end estará disponível em:**
   ```
   http://localhost:4567
   ```

---
