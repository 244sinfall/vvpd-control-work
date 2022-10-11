import React from 'react';
import LayoutModal from "../../components/layouts/layout-modal";
import AboutContent from "../../components/content/about";

interface AboutModalProps {
    onClose: () => void
}

const AboutModal = (props: AboutModalProps) => {
    return (
        <LayoutModal title="О задании" onClose={props.onClose}>
            <AboutContent/>
        </LayoutModal>
    );
};

export default React.memo(AboutModal);