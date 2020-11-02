import blessed

def tprint(x):
    print(x, end='')

def draw_label(term, label, y, other_labels):
    max_length = max([len(x) for x in other_labels])
    tprint(term.move_xy(max_length - len(label), y) + label)

def draw_static(term):
    input_field_label =  "Binary input:"
    result_field_label = "Decimal result:"
    all_labels = (input_field_label, result_field_label)
    all_labels_max_length = max([len(x) for x in all_labels])
    data_x_start = all_labels_max_length + 1

    tprint(term.home + term.clear)
    tprint(term.underline)
    draw_label(term, input_field_label, 0, all_labels)
    draw_label(term, result_field_label, 2, all_labels)
    tprint(term.no_underline)
    return data_x_start

def main():
    max_length = 32
    bin_input = [0 for i in range(max_length)]
    dec_output = 0
    term = blessed.Terminal()
    bin_input_i = 0

    with term.fullscreen(), term.cbreak():
        data_x_start = draw_static(term)
        
        while True:
            dec_output = 0
            for i, x in enumerate(bin_input):
                if x == 1:
                    dec_output += 2 ** (max_length - 1 - i)

            tprint(term.move_xy(data_x_start, 0) + ''.join([str(x) for x in bin_input]))
            tprint(term.move_xy(data_x_start, 2) + term.clear_eol + str(dec_output))

            tprint(term.move_xy(data_x_start + bin_input_i, 0))

            raw_key = term.inkey()
            key = raw_key.name
            if key == None:
                key = raw_key

            if key in ('q', 'KEY_ESCAPE'):
                break
            elif key in ('1', '0'):
                bin_input[bin_input_i] = int(key)
                bin_input_i = (bin_input_i + 1) % max_length
            elif key == "KEY_LEFT":
                bin_input_i = max(0, bin_input_i - 1)
            elif key == "KEY_RIGHT":
                bin_input_i = min(max_length - 1, bin_input_i + 1)
            elif key == '3':
                max_length = 32
                data_x_start = draw_static(term)
                bin_input = [0 for i in range(max_length)]
                bin_input_i = 0
            elif key == '6':
                max_length = 64
                data_x_start = draw_static(term)
                bin_input = [0 for i in range(max_length)]
                bin_input_i = 0
            else:
                continue

    return 0

exit(main())