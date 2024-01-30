import Child from "../child/child.component";
import Message from "../message/message.component";
export default function Parent() {
  return (
    <Child>
      <h2>I am a children prop heading</h2>
      <Message />
    </Child>
  );
}