import React from 'react';

const Women = () => {
    return (
        <>
            <div className="fixed-top">
                <Main_header className="bg-white border-bottom" />
                <Header className="bg-white border-bottom" />
            </div>
            <div className="pt-5" style={{ marginTop: '90px' }}>
                <Routes>
                    <Route exact path="/tvs" element={<Tv />} />
                    <Route exact path="/air-conditioners" element={<Ac />} />
                    <Route exact path="/washing-machines" element={<WashingMatching />} />
                </Routes>
            </div>
        </>
    );
}

export default Women;
