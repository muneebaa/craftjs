import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import { Container } from "./components/user/Container";

import lz from "lzutf8";
import { useEffect, useState } from "react";
import { InnerComponent } from "./InnerComponent";

const MyFrame = ({ data }) => {
  // const { actions, query } = useEditor();
  const [convertedData, setConvertedData] = useState(null);

  useEffect(() => {
    console.log("data----------------", data);
    // // const myData = data.serialize();
    // // console.log("myData-----------", myData);

    // let encode = lz.encodeBase64(lz.compress(data));
    // let decode = lz.decompress(lz.decodeBase64(encode));
    setConvertedData(data);
    // console.log("encoded---", encode);
    // console.log("decode---", decode);
  }, [data]);

  return (
    <div>
      <h2>My App!</h2>
      <Editor
        resolver={{
          Container,
        }}
      >
        <h2>My Page Editor</h2>
        <InnerComponent convertedData={convertedData} />
        <Frame>
          <Element is={Container} canvas>
            <h2>Drag me around</h2>
            <Element is="div" style={{ background: "#333" }}>
              <p>Same here</p>
            </Element>
          </Element>
        </Frame>
      </Editor>
    </div>
  );
};

export default MyFrame;
