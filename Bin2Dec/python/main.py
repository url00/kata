import blessed

def tprint(x):
    print(x, end='')

def main():
    bin_input = [0 for i in range(8)]
    dec_output = 0
    term = blessed.Terminal()
    bin_input_i = 0

    with term.fullscreen(), term.cbreak():
        input_field_label =  "Binary input (max 8 chars):"
        result_field_label = "Result:"
        tprint(term.home + term.clear)
        tprint(term.underline)
        tprint(input_field_label)
        tprint(term.move_xy(len(input_field_label) - len(result_field_label), 1) + result_field_label)
        tprint(term.no_underline)
        
        while True:
            dec_output = 0
            for i, x in enumerate(bin_input):
                if x == 1:
                    dec_output += 2 ** (7 - i)

            tprint(term.move_xy(len(input_field_label) + 1, 0) + ''.join([str(x) for x in bin_input]))
            tprint(term.move_xy(len(input_field_label) + 1, 1) + term.clear_eol + str(dec_output))

            tprint(term.move_xy(len(input_field_label) + 1 + bin_input_i, 0))

            raw_key = term.inkey()
            key = raw_key.name
            if key == None:
                key = raw_key

            if key in ('q', 'KEY_ESCAPE'):
                break
            elif key in ('1', '0'):
                bin_input[bin_input_i] = int(key)
                bin_input_i = (bin_input_i + 1) % 8
            elif key == "KEY_LEFT":
                bin_input_i = max(0, bin_input_i - 1)
            elif key == "KEY_RIGHT":
                bin_input_i = min(7, bin_input_i + 1)
            else:
                continue
            
    return 0

exit(main())