import * as React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Gabriela Souza</Text>
      <Image style={StyleSheet.image} source={require('./assets/splash.png')}/>

      <Pressable
        onPress={() => navigation.navigate('Sobre mim')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Sobre mim</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Formação e experiências')}
        style={{ backgroundColor: 'grey', padding: 10 }}>
        <Text>Formação e experiências</Text>
      </Pressable>
    </View>
  );
}

function Sobre() {
  return (
    <View style={{ textAlign: 'justify', flex: 1, alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
      <Text>Atualmente, estou cursando o 3º período de minha formação em nível superior tecnólogo em Análise e
        Desenvolvimento de Sistemas pelo programa Embarque Digital, parceria do Porto Digital com a Prefeitura do Recife.
        Fui estagiária de tecnologia na área de processos e qualidade, e hoje atuo como desenvolvedora SAP ABAP na
        Accenture, onde participo de um projeto de nível global colocando em prática meus conhecimentos em report,
        module pool, BAPIs, S/4hanna, etc. Além disso, possuo conhecimentos avançados em Inglês, que aprimorei quando
        realizei um intercâmbio de 1 mês em Toronto - Canadá. Me dedico ao máximo à minha evolução pessoal e qualificação
        profissional, sou responsável, organizada e sempre tive facilidade com trabalhos e dinâmicas em equipe.</Text>
    </View>
  );
}

function Formacao() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  textAlign: 'justify', padding: '50px' }}>
      <Text>O meu percurso educacional abrange uma formação atualmente em andamento no curso de Tecnólogo em Análise e Desenvolvimento de Sistemas na Faculdade Senac Pernambuco, onde, no terceiro período, aplico conhecimentos adquiridos em disciplinas como Inovação, Gestão de Projetos, Coding e Design de Interação em projetos práticos. Destaco meu envolvimento como Scrum Master no desenvolvimento do aplicativo de corrida gamificado chamado "Run & Raid" e no projeto "Raincife", uma aplicação voltada para alertas e auxílio em situações de emergência em áreas propensas a deslizamentos.
Além disso, concluí um curso profissionalizante em Programador Web no Senac Pernambuco, durante o qual desenvolvi o site "Portal Preparada" como expressão de gratidão ao Projeto Preparada - Instituto Boa Vista, financiador do curso. No âmbito deste programa, adquiri habilidades no front-end, utilizando HTML, CSS, JavaScript e Bootstrap, e no back-end, trabalhando com Python, Django e MySQL.
Anteriormente, realizei um intercâmbio na Western Town College, focado no aprimoramento do inglês como segunda língua, incluindo treinamento em conversação intercultural. Estas experiências diversificadas contribuem para a minha formação, combinando competências técnicas, habilidades práticas e uma perspectiva internacional.</Text>
      <Text>{'\n'}Como Desenvolvedora SAP ABAP Jr. na Accenture, integro o time de AMS no módulo FI, participando de projetos globais que envolvem a criação, ajustes e manutenção de programas. Minhas responsabilidades abrangem a elaboração de Reports (ALV, grid), Module pool, Enhancements, e trabalho com S/4HANA, além de realizar testes unitários, debug, implementar regras de validação (user exits) e documentação técnica. Possuo competências em SAP S/4HANA, SAP, BAPI e ABAP.
Anteriormente, como estagiária na SELFIT Academias, atuei por seis meses em um ambiente presencial, contribuindo para projetos de Technology, Innovation, Analytics, and Processes. Durante este período, adquiri experiência em diversas áreas, como BPMN para mapeamento de processos, automação de processos usando uma ferramenta de baixo código (ZEEV), desenvolvimento web com JavaScript, utilização de ferramentas de melhoria contínua (PDCA Cycle, 5W2H, Ishikawa diagram), desenvolvimento de planos de teste, coleta e estruturação de dados para análise usando ferramentas analíticas, suporte na entrega de projetos (relatórios, apresentações) e utilização do Microsoft 365. Minhas competências incluem processos empresariais, melhoria contínua, resolução de problemas, gerenciamento de processos de negócios e automação de processos.</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre mim" component={Sobre} />
        <Stack.Screen name="Formação e experiências" component={Formacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
