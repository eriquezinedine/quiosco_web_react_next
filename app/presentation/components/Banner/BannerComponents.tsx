// import "./styles.css";
import { VirtualizedPage } from './VirtualizedPage';

const images = [
    <div style={{ width: "1024px" , height: '200px', background: 'red', border :'5px solid black' }} ></div>,
    <div style={{ width: "1024px" , height: '200px', background: 'yellow' }} ></div>,
    // <div style={{ width: "1024px" , height: '200px', background: 'green' }} ></div>,
];
//   "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640",
//   "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640",
//   "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640",
export default function BannerComponents() {

 
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 1024, height: 500 }}>
        <VirtualizedPage>
          {({ index }) => {
            const modulo = index % images.length;
            const imageIndex = modulo < 0 ? images.length + modulo : modulo;
            console.log('index', index );
            return (
                images[imageIndex]
            //     <div
            //     // draggable={false}
            //     // alt="Mountain"
            //     style={{ width: "1024px" , background: getColor(index) , height: '200px' }}
            //     // src={images[imageIndex]}
            //   />
            );
          }}
        </VirtualizedPage>
      </div>
    </div>
  );    
}
