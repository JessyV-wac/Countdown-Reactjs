import { useEffect, useRef, useState } from "react";
import {
    Alert,
    Container
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
    const isMounted = useRef(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [timeoutID, setTimeoutID] = useState();
    const [countdown, setCountdown] = useState(10);
    
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        clearTimeout(timeoutID);
        setCountdown(10);
    }, [location]);


    useEffect(() => {
        if (countdown === 0) {
            navigate("/");
        } else {
            setTimeoutID(setTimeout(() => {
                if (isMounted.current) {
                    setCountdown(countdown - 1);
                }
            }, 1000));
        }
    }, [countdown]);

    return (
        <Container>
            <Alert variant="danger" className="text-center">
                <Alert.Heading>404: Désolé, nous ne trouvons pas la page demandée !</Alert.Heading>
                <p>La page que vous avez recherché est temporairement indisponible, ou n'existe pas.</p>
                <p>Vous allez être automatiquement rediriger dans { countdown + "s" }</p>
            </Alert>
        </Container>
    );
};