function fish_prompt -d "Write out the prompt"
    # This shows up as USER@HOST /home/user/ >, with the directory colored
    # $USER and $hostname are set by fish, so you can just use them
    # instead of using `whoami` and `hostname`
    printf '%s@%s %s%s%s > ' $USER $hostname \
        (set_color $fish_color_cwd) (prompt_pwd) (set_color normal)
end

export GOBIN=~/.go/bin

fish_add_path $HOME/.cargo/bin
fish_add_path $(go env GOBIN)
fish_add_path /home/valentinr/.pulumi/bin

if status is-interactive
    # Commands to run in interactive sessions can go here
    set fish_greeting

end


starship init fish | source

# Aliases
alias hx=helix
alias k=kubectl
