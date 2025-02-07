import React, { useState } from 'react';
import './FridayUpdateForm.css';

function FridayUpdateForm() {
  const [clientName, setClientName] = useState('');
  const [projectStatus, setProjectStatus] = useState('');
  const [keyAccomplishments, setKeyAccomplishments] = useState('');
  const [upcomingTasks, setUpcomingTasks] = useState('');
  const [potentialRoadblocks, setPotentialRoadblocks] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [prompt, setPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    let generatedPrompt = `Compose a highly professional, yet personable, Friday update email to ${clientName || '[Client Name]'}. Assume the persona of a highly competent and proactive [Your Job Title], celebrated for clear communication and exceeding client expectations. Employ persuasive language and positive framing to highlight progress and instill confidence. Incorporate the following elements:\n\n`;

    generatedPrompt += `1. **Executive Summary:** Begin with a concise overview of the project's current standing, emphasizing key milestones achieved this week.\n`;

    if (projectStatus) {
      generatedPrompt += `2. **Detailed Status:** Provide a more granular update on the project status, elaborating on: ${projectStatus}. Use quantifiable metrics where possible to demonstrate progress.\n`;
    }
    if (keyAccomplishments) {
      generatedPrompt += `3. **Key Accomplishments:** Showcase the week's most significant achievements, framing them in terms of client benefits and strategic value. Be specific and avoid jargon: ${keyAccomplishments}.\n`;
    }
    if (upcomingTasks) {
      generatedPrompt += `4. **Forward-Looking Plan:** Outline the key tasks and objectives for the upcoming week, demonstrating a proactive and well-organized approach: ${upcomingTasks}. Highlight any dependencies or potential challenges.\n`;
    }
    if (potentialRoadblocks) {
      generatedPrompt += `5. **Risk Mitigation:** Transparently address any potential roadblocks or challenges, while simultaneously presenting proactive solutions and mitigation strategies: ${potentialRoadblocks}. Frame challenges as opportunities for innovation and problem-solving.\n`;
    }
    if (generalNotes) {
      generatedPrompt += `6. **Value-Added Insights:** Include any additional notes, insights, or recommendations that demonstrate your commitment to the client's success and provide added value: ${generalNotes}.\n`;
    }

    generatedPrompt += `\n7. **Call to Action:** End with a clear call to action, inviting feedback, scheduling a follow-up call, or reiterating your commitment to ongoing support.\n\n`;
    generatedPrompt += `Ensure the email maintains a tone of confident optimism, transparency, and unwavering dedication to the client's goals. Optimize for readability and conciseness, adhering to best practices for professional email communication.`;

    setPrompt(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Clear message after 2 seconds
  };

  return (
    <div className="friday-update-form">
      <h2>Friday Update Email Generator</h2>
      <div className="form-group">
        <label htmlFor="clientName">Client Name:</label>
        <input type="text" id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="projectStatus">Project Status:</label>
        <textarea id="projectStatus" value={projectStatus} onChange={(e) => setProjectStatus(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="keyAccomplishments">Key Accomplishments:</label>
        <textarea id="keyAccomplishments" value={keyAccomplishments} onChange={(e) => setKeyAccomplishments(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="upcomingTasks">Upcoming Tasks:</label>
        <textarea id="upcomingTasks" value={upcomingTasks} onChange={(e) => setUpcomingTasks(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="potentialRoadblocks">Potential Roadblocks:</label>
        <textarea id="potentialRoadblocks" value={potentialRoadblocks} onChange={(e) => setPotentialRoadblocks(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="generalNotes">General Notes:</label>
        <textarea id="generalNotes" value={generalNotes} onChange={(e) => setGeneralNotes(e.target.value)} />
      </div>
      <button onClick={generatePrompt}>Generate Prompt</button>
      {copied && <p className="copied-message">Prompt generated! Copy it below:</p>}
      {prompt && (
        <div className="prompt-preview">
          <h3>Generated Prompt:</h3>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}

export default FridayUpdateForm;
