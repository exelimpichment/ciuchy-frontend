import UnderConstruction from '@/components/Settings/UnderConstruction/UnderConstruction';
import { BiMessageSquareAdd } from 'react-icons/bi';
import styled from 'styled-components';

function Messages() {
  return (
    <MessagesWrapper>
      <div className="container">
        <div className="messages-container__inner">
          <aside className="messages__chats">
            <div className="messages__chats-header">
              <h2>Inbox</h2>
              <button className="messages__svg-button">
                <BiMessageSquareAdd />
              </button>
            </div>
          </aside>
          <section className="messages__dialog">
            <div className="messages__dialog-header">
              <h2>Username</h2>
            </div>
            <UnderConstruction
              paragraph={'websockets-based chat will be implemented here'}
            />
          </section>
        </div>
      </div>
    </MessagesWrapper>
  );
}

export default Messages;

const MessagesWrapper = styled.div`
  .messages-container__inner {
    display: flex;
    padding: 20px 0;
    min-height: calc(100vh - (111px + 65px));

    .messages__chats {
      width: 350px;
      border: 1px solid #e6ecf0;

      .messages__chats-header {
        border-bottom: 1px solid #e6ecf0;
        min-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 1.2rem;

        h2 {
          font-size: 1.2rem;
        }
        .messages__svg-button {
          display: flex;
          flex-direction: column;
          justify-content: center;

          svg {
            font-size: 1.75rem;
            cursor: pointer;
            color: #787878;

            &:hover {
              color: #c45f55;
              transition: all ease 0.2s;
            }
          }
        }
      }
    }

    .messages__dialog {
      border: 1px solid #e6ecf0;
      flex-grow: 1;

      .messages__dialog-header {
        font-size: 1.2rem;
        border-bottom: 1px solid #e6ecf0;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
