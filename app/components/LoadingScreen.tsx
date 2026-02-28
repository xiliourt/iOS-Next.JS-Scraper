import React from "react";
import { LOADING_MESSAGES } from "../constants";

interface LoadingScreenProps {
  loading: boolean;
  processing: boolean;
  fakeProgress: number;
  loadingMessageIndex: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  loading,
  processing,
  fakeProgress,
  loadingMessageIndex,
}) => {
  if (!loading && !processing) return null;

  return (
    <div className="loading-container results-container" style={{ minHeight: '300px' }}>
       <div className="loading-header">
         <div className="spinner"></div>
         <h3>{loading ? "Deep Scraping Operation in Progress" : "Processing Conversions"}</h3>
       </div>
       
       <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ 
              width: loading ? `${fakeProgress}%` : '95%',
              transition: loading ? 'width 1s linear' : 'width 0.5s ease-out'
            }}
          ></div>
       </div>
       
       <div className="message-container">
          <p className="loading-message" key={loadingMessageIndex}>
            {loading ? LOADING_MESSAGES[loadingMessageIndex] : "Adjusting to your target currency..."}
          </p>
          <p className="subtle-text">
            {loading ? "Searching all 175 App Store regions. This usually takes 30-45 seconds." : "Recalculating local prices using latest exchange rates."}
          </p>
       </div>
    </div>
  );
};
