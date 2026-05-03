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
- Node.js (v20 ou superior)
- JDK 17 ou 21 (LTS)
- Android Studio ou instalar aplicativo Expo Go no celular (Android/iOS) ou emulador configurado
- Se escolher instalar o Android Studio faça essas configurações: 
SDK Platform (Android 13+)
Android SDK Build-Tools
Criar AVD (Pixel 5 ou similar)

- Visual Studio Code (VS Code)  
- Expo CLI (`npm install -g expo-cli`)  

**Passo a passo:**  
1. Clonar o repositório:  
   git clone <https://github.com/mimasc/-fiap-cpad-cp1-FIAP-cafe>  
   cd -fiap-cpad-cp2-FIAP-cafe  
   cd meu-primeiro-app   
3. Instalar dependências:  
   npm install
4. Rodar o projeto:  
   npm start
5. Escanear o QR Code com o Expo Go ou abrir no emulador ou apertar "a" no terminal para abrir o app no Android Studio

---

## 🎬 Demonstração
-Prints das telas do aplicativo:

<img width="252" height="576" alt="image" src="https://github.com/user-attachments/assets/297c384b-b476-4ddf-aab1-58f9b96d3094" />
<img width="254" height="578" alt="image" src="https://github.com/user-attachments/assets/f1463b18-9955-4fe7-9ac7-5e084efed51e" />
<img width="253" height="565" alt="image" src="https://github.com/user-attachments/assets/5225bdbb-9e69-408f-b8b7-ac7683af43a1" />
<img width="249" height="571" alt="image" src="https://github.com/user-attachments/assets/93b8ab75-8c8a-4972-b70b-d4e2bb854d28" />

-Link do vídeo-explicação do aplicativo:
https://www.youtube.com/watch?v=7Ed-2dSqLOs

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
- Imagens dos produtos;

 ---
  
