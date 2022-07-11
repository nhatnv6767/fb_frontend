import {useMediaQuery} from "react-responsive";

export default function MyComponent(
    {
        handleRegisterChange,
        genderError,
    }
) {
    const view1 = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 539px)",
    });
    const view2 = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 850px)",
    });
    const view3 = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 1170px)",
    });
    return (
        <div
            className="reg_grid"
            style={{marginBottom: `${genderError && !view3 && "70px"}`}}
        >
            <label htmlFor="male">
                Male
                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleRegisterChange}
                />
            </label>
            <label htmlFor="female">
                Female
                <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleRegisterChange}
                />
            </label>
            <label htmlFor="custom">
                Custom
                <input
                    type="radio"
                    name="gender"
                    id="custom"
                    value="custom"
                    onChange={handleRegisterChange}
                />
            </label>
            {genderError && (
                <div className="input_error">
                    <div className="error_arrow_bottom"></div>
                    {genderError}
                </div>
            )}
        </div>
    );
}