
import React, { useState } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function PowerBI() {
  const [showReport, setShowReport] = useState(false);

  const handleButtonClick = () => {
    setShowReport(true);
  };

  return (
    <div className="PowerBI">
      <h1>Power BI Report</h1>
      <button onClick={handleButtonClick}>Show Report</button>
      {showReport && (
        <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: 'a7ab29a3-02c7-4c45-81a8-e756e9897d79',
            embedUrl: <embedUrl>
            
            accessToken:<accessToken>

            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}
        />
      )}
    </div>
  );
}

export default PowerBI;
