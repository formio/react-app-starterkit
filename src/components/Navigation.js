import { useState, useMemo } from "react";

function Navigation() {
    const [items, setItems] = useState([]);
    const [starred, setStarred] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    const [errors, setErrors] = useState([]);

    useMemo(() => {
        const interval = setInterval(() => {
            const elements = document.getElementsByClassName("card-title");
            setItems([...elements]);
            const numbers = [];
            const doneness = [];

            const errors = [];
            items.forEach((item) => {
                const stars =
                    item.parentElement.parentElement.getElementsByClassName(
                        "required"
                    );

                const done = item.parentElement.parentElement.querySelectorAll(
                    ".required.formio-modified"
                );
                const error = item.parentElement.parentElement.querySelectorAll(
                    ".required.formio-modified.has-error"
                );
                errors.push(error.length);
                doneness.push(done.length);
                const number = stars.length;
                numbers.push(number);
            });
            setDoneItems([...doneness]);
            setErrors([...errors]);
            setStarred([...numbers]);
        }, 1000);
        return () => clearInterval(interval);
    }, [items]);

    return (
        <>
            <div className="navigationMenu">
                <div className="clientInfo">
                    <h2>Kelly Baker</h2>
                    <p>Digital assessment</p>
                </div>
                <ul style={{ listStyleType: "none" }}>
                    {items &&
                        items.length > 0 &&
                        items.map((item, index) => (
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    className={
                                        (doneItems[index] || 0) -
                                            (errors[index] || 0) ===
                                            starred[index] && starred[index] > 0
                                            ? "status done"
                                            : "status"
                                    }
                                ></span>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        item.scrollIntoView(true, {
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    {item.textContent.trim()}
                                </a>
                                <span className="progression">
                                    {starred.length >= index &&
                                    starred[index] > 0 ? (
                                        <div
                                            style={{
                                                width: "4rem",
                                                textAlign: "right",
                                            }}
                                        >{`${
                                            (doneItems[index] || 0) -
                                            (errors[index] || 0)
                                        }/${starred[index]}`}</div>
                                    ) : (
                                        <div style={{ width: "4rem" }}></div>
                                    )}
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}

export default Navigation;
