import Head from 'next/head';
import styled from 'styled-components';
import ChatScreen from '../../componnets/ChatScreen';
import Sidebar from '../../componnets/Sidebar';
import { auth, db } from '../../firebase';

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = db.collection('chats').doc(context.query.id);
  const messagesRes = await ref
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .get();
}
const Container = styled.div`
  display: flex;
`;
const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
