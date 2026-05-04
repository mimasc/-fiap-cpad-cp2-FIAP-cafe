# ☕🥐 Fiap-Café

Aplicativo desenvolvido para simular um sistema de pedidos e retiradas na cantina da universidade. Ele permite que o usuário navegue pela categoria de produtos cafés ☕, adicione itens ao carrinho e visualize o total da compra. O principal problema que resolve é o **excesso de filas**, trazendo mais praticidade e agilidade para os alunos. 

A operação escolhida foi a da **cantina da FIAP**, justamente por ser um espaço de grande fluxo de estudantes e por representar bem a necessidade de otimizar o atendimento.

### 🔄 Evolução em relação ao CP1

Em comparação com a versão anterior (CP1), o projeto evoluiu significativamente:

Antes: aplicação simples com carrinho local

Agora:
- 🔐 Sistema completo de autenticação (login/cadastro)
- 💾 Persistência de dados com AsyncStorage e SecureStore
- 🧠 Uso de Context API para gerenciamento global de estado
- 🧭 Navegação protegida (usuário precisa estar logado)
- 📂 Estrutura modular e escalável

### 🚀 Funcionalidades
- Cadastro de usuário
- Login com validação de credenciais
- Persistência de sessão (usuário permanece logado)
- Navegação entre categorias:
- Cafés
- Bebidas
- Salgados
- Doces
- Outros
- Adição de produtos ao carrinho
- Remoção de itens do carrinho
- Limpeza completa do carrinho
- Cálculo automático do valor total
- Feedback visual ao adicionar produtos
- Finalização de pedido simulada
- Logout do usuário

---

## 👥 Integrantes do Grupo
- Vitor Komura – RM563694  
- Caio Castelão – RM563630  
- Mirella Mascarenhas – RM562092  
- Guilherme Tamai – RM563276  
- André Gouveia – RM564219  
- André Nobrega– RM561754

---

## 🚀 Como Rodar o Projeto
Para rodar o projeto é necessário ter alguns pré-requisitos instalados:  
- Node.js (v18 ou superior)  
- JDK 17 ou 21 (LTS)  
- Android Studio ou aplicativo Expo Go no celular (Android/iOS) ou emulador configurado  
- Visual Studio Code (VS Code)  

Se escolher instalar o Android Studio faça essas configurações:  
- SDK Platform (Android 13+)  
- Android SDK Build-Tools  
- Criar AVD (Pixel 5 ou similar)  

**Passo a passo:**  
1. Clonar o repositório:  
   `git clone https://github.com/mimasc/-fiap-cpad-cp2-FIAP-cafe.git`

2. Entrar na pasta do projeto:  
   `cd -fiap-cpad-cp2-FIAP-cafe`  
   `cd meu-primeiro-app`

3. Instalar dependências:  
   `npm install`

4. Rodar o projeto:  
   `npx expo start`

5. Escanear o QR Code com o Expo Go ou apertar `a` no terminal para abrir no emulador Android.
---

## 🎬 Demonstração Visual
-Prints das telas do aplicativo:

<img width="259" height="599" alt="image" src="https://github.com/user-attachments/assets/b64eaec4-0eb4-47fe-af84-b8b37b1c5547" />
<img width="271" height="598" alt="image" src="https://github.com/user-attachments/assets/e52890cd-f7a2-484d-8843-bad3452479a4" />
<img width="272" height="592" alt="image" src="https://github.com/user-attachments/assets/0a1a9af0-2160-421f-831f-e25430f736b7" />
<img width="267" height="596" alt="image" src="https://github.com/user-attachments/assets/1a45d50b-ea81-41c4-976b-4fa0fa534e86" />
<img width="269" height="596" alt="image" src="https://github.com/user-attachments/assets/28dd4e7e-07fc-46cd-9fba-c58a799fc4f6" />
<img width="266" height="604" alt="image" src="https://github.com/user-attachments/assets/292cd5a7-2dca-477c-b50a-1b31e4137203" />
<img width="267" height="593" alt="image" src="https://github.com/user-attachments/assets/4a3b96b8-7413-49d6-8d49-4553d55ac171" />
<img width="269" height="598" alt="image" src="https://github.com/user-attachments/assets/28aa18bf-3644-4165-bd07-d36af06a5fd7" />
<img width="274" height="594" alt="image" src="https://github.com/user-attachments/assets/0e4d0fd8-87b1-47df-9852-0acbb7ce2969" />
<img width="266" height="596" alt="image" src="https://github.com/user-attachments/assets/091e0efe-e588-4c63-ba83-065695205e53" />
<img width="269" height="597" alt="image" src="https://github.com/user-attachments/assets/85b732cc-f4d3-4c1c-b24d-b61b7a6db897" />
<img width="266" height="597" alt="image" src="https://github.com/user-attachments/assets/e69fab17-65e1-4b39-8bc2-05518ad4b787" />


-Link do vídeo-explicação do aplicativo: https://youtu.be/urcsJ7Y5V5Y?si=UO7ou4WJa0M3zobJ


---

## 🛠️ Decisões Técnicas

### 📂 Estrutura do Projeto
- app/ → telas do aplicativo
- components/ → componentes reutilizáveis
- contexts/ → gerenciamento de estado global
- data/ → dados dos produtos
- utils/ → validações
  
### 🧠 Context API
- AuthContext
  - Gerencia autenticação do usuário
  - Controla login, cadastro e logout
  - Mantém sessão ativa
- CartContext
  - Gerencia itens do carrinho
  - Calcula total automaticamente
  - Controla feedback visual

### 🔐 Autenticação

- Implementada com armazenamento local:
  - Usuários → AsyncStorage `(@fiap_cafe:users)`
  - Sessão → SecureStore `(fiap_cafe_session)`
- Login valida e-mail e senha cadastrados
- Sessão persiste mesmo após fechar o app
  
### 💾 Persistência (AsyncStorage)
- Carrinho salvo com chave:
  `@fiap_cafe:cart`
Dados persistidos:
  - Itens adicionados ao carrinho
  - Mantidos mesmo após reiniciar o app

### 🧭 Navegação Protegida
- Implementada no _layout.js
- Usuário não autenticado → redirecionado para login
- Usuário autenticado → acesso liberado
- Uso de:
  - `useSegments`
  - `useRouter`

---


## ⭐ Diferenciais Técnicos Implementados

Além do uso do Expo SecureStore para armazenar a sessão do usuário de forma mais segura, o app também implementa busca em tempo real nas categorias.

A busca em tempo real foi escolhida porque o objetivo do Fiap-Café é reduzir o tempo de pedido na cantina. Com o filtro dinâmico, o usuário encontra rapidamente cafés, bebidas, salgados e doces sem precisar rolar toda a lista.

A autenticação do app foi implementada utilizando o expo-secure-store para armazenar a sessão do usuário de forma segura no dispositivo. A experiência em “tempo real” é garantida pelo uso de estado global (Context) e re-renderização imediata da interface ao adicionar/remover itens.

---


## 🔮 Próximos Passos
Com mais tempo de desenvolvimento, o grupo poderia implementar melhorias como:  

- Controle de quantidade no carrinho (+ / -);
- Alerta ao limpar carrinho;
- Carrinho separado por usuário;
- Histórico de pedidos;
- Animações na interface;
- Feedback visual (toast melhorado);

 ---
  
