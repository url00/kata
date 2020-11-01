import blessed

def get_new_current_bin_input_from_key(current_bin_input, key):
    return current_bin_input + key

def tprint(x):
    print(x, end='')

def main():
    current_bin_input = ""
    current_dec_output = "outupt"
    term = blessed.Terminal()

    with term.cbreak():
        while True:
            current_dec_output = str(term.get_location())
            input_field_label =  "Binary input (max 8 chars):"
            result_field_label = "Result:"
            tprint(term.home + term.clear)
            tprint(term.underline)
            tprint(input_field_label)
            tprint(term.home + term.move_down())
            tprint(term.move_xy(len(input_field_label) - len(result_field_label), 1))
            tprint(term.no_underline)
            tprint(term.move_xy(len(input_field_label) + 1, 0) + current_bin_input)
            tprint(term.move_xy(len(input_field_label) + 1, 1) + current_dec_output)
            tprint(term.move_xy(len(input_field_label) + 1 + len(current_bin_input), 0))


            key = term.inkey()
            if key in ('q', 'KEY_ESCAPE'):
                break
            else:
                current_bin_input =  get_new_current_bin_input_from_key(current_bin_input, key)



    return 0

exit(main())