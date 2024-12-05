import React from 'react';
import Header from '../components/Header';

const CurrentAffairs = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Current Affairs</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Right to Record in Public in Sri Lanka</h2>
            <p className="text-gray-600 mb-6">Published on: 04/12/2024</p>
            
            <div className="prose prose-lg">
              <p className="mb-6">
                In recent years, the question of whether citizens can legally video record in public spaces in Sri Lanka has gained significant attention. The answer is nuanced and depends on various factors, including privacy rights and the context in which the recording is taking place.
              </p>

              <h3 className="text-xl font-semibold mb-4">Legal Framework</h3>
              <p className="mb-6">
                Sri Lanka does not have a specific constitutional right to privacy, but privacy is recognized in several Acts and common law. The Right to Information Act, No. 12 of 2016, guarantees access to information, which can include the right to record public officials and events. However, this right is not absolute and must be balanced against other rights and considerations.
              </p>

              <h3 className="text-xl font-semibold mb-4">Public vs. Private Spaces</h3>
              <p className="mb-6">
                Recording in public spaces is generally allowed, especially when it involves public officials or events of public interest. For instance, the police have recently been directed to allow citizens to record their activities, emphasizing that recording is neither illegal nor prohibited by law. However, recording in private spaces without consent can lead to legal issues related to privacy violations.
              </p>

              <h3 className="text-xl font-semibold mb-4">Ethical Considerations</h3>
              <p className="mb-6">
                While the law may permit recording in public, ethical considerations should also be taken into account. Respecting the privacy and dignity of individuals is crucial, even in public settings. It's important to consider the potential impact of recording on the subjects involved and to seek consent whenever possible.
              </p>

              <h3 className="text-xl font-semibold mb-4">Recent Incidents</h3>
              <p className="mb-6">
                There have been instances where individuals were wrongfully asked to stop recording and faced harassment. For example, there have been reports of citizens being harassed by authorities for recording public events or police activities. These incidents highlight the need for clear guidelines and awareness about the legal rights of citizens to record in public spaces.
              </p>

              <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
              <p className="mb-6">
                In summary, citizens in Sri Lanka can generally video record in public spaces, particularly when it involves public officials or events. However, it's essential to be mindful of privacy rights and ethical considerations. Always seek consent when recording in private or sensitive situations to avoid legal and ethical complications.
              </p>

              <p>
                By understanding and respecting these guidelines, citizens can exercise their rights responsibly and contribute to a more transparent and accountable society.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrentAffairs;