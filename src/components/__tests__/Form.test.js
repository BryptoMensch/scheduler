import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {
	const interviewers = [
		{
			id: 1,
			name: "Sylvia Palmer",
			avatar: "https://i.imgur.com/LpaY82x.png",
		},
	];

	// 1. RENDERS W/O STUDENT NAME
	it("renders without student name if not provided", () => {
		const { getByPlaceholderText } = render(
			<Form interviewers={interviewers} />
		);
		expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
	});

	// 2. RENDERS W/ STUDENT NAME
	it("renders with initial student name", () => {
		const { getByTestId } = render(
			<Form interviewers={interviewers} name="Lydia Miller-Jones" />
		);
		expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
	});

	// 3. VALIDATES STUDENT NAME NOT BLANK
	it("validates that the student name is not blank", () => {
		const onSave = jest.fn();
		const { getByText } = render(
			<Form interviewers={interviewers} onSave={onSave} />
		);

		fireEvent.click(getByText("Save"));
		expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
		expect(onSave).not.toHaveBeenCalled();
	});

	// 4. SAVE W EMPTY STUDENT NAME
	it("can successfully save after trying to submit an empty student name", () => {
		const onSave = jest.fn();
		const { getByText, getByPlaceholderText, queryByText } = render(
			<Form interviewers={interviewers} onSave={onSave} />
		);

		fireEvent.click(getByText("Save"));
		expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
		expect(onSave).not.toHaveBeenCalled();

		fireEvent.change(getByPlaceholderText("Enter Student Name"), {
			target: { value: "Lydia Miller-Jones" },
		});

		fireEvent.click(getByText("Save"));
		expect(queryByText(/student name cannot be blank/i)).toBeNull();
		expect(onSave).toHaveBeenCalledTimes(1);
		expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", null);
	});

	// 5. CANCELS/RESETS
	it("calls onCancel and resets the input field", () => {
		const onCancel = jest.fn();
		const { getByText, getByPlaceholderText, queryByText } = render(
			<Form
				interviewers={interviewers}
				name="Lydia Mill-Jones"
				onSave={jest.fn()}
				onCancel={onCancel}
			/>
		);

		fireEvent.click(getByText("Save"));
		fireEvent.change(getByPlaceholderText("Enter Student Name"), {
			target: { value: "Lydia Miller-Jones" },
		});
		fireEvent.click(getByText("Cancel"));
		expect(queryByText(/student name cannot be blank/i)).toBeNull();
		expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
		expect(onCancel).toHaveBeenCalledTimes(1);
	});
});
