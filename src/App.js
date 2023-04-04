import './App.css';
import Video from './pages/Video';


function App() {
  return (
    <div className='App'>
      <div className='app_videos'>
        <Video
          likes={111}
          messages={222}
          shares={333}
          name='Michelle'
          description='Brecker o goleiro'
          music='Música éica'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74'
          // url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'
        />

        <Video
          likes={44}
          messages={55}
          shares={66}
          name='Paulo'
          description='Gata Bird olhando para câmera'
          music='Clap our hands'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da'
          // url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4'
        />
      </div>
    </div>
  );
}

export default App;
