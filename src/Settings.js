import ReactSlider from 'react-slider';
import './slider.css'
import SettingsContext from "./SettingsContext";
import { useContext, useState } from "react";
import BackButton from "./BackButton";


function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const [numPreguntas, setNumPreguntas] = useState(5)


  return (
    <div style={{ textAlign: 'left' }}>
      <label>estudio: {settingsInfo.workMinutes} minutos</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>número de preguntas: {numPreguntas}</label>
      <ReactSlider
        className={'slider yellow'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={numPreguntas}
        onChange={newValue => setNumPreguntas(newValue)}
        min={1}
        max={25}
      />
      <label>Descanso: {settingsInfo.breakMinutes} minutos</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>

    </div>
  );
}

export default Settings;