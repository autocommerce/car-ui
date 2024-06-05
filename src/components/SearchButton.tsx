'use client';
import React from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchButtonProps {
    onClick: () => void;
    disabled?: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, disabled }) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            startIcon={<SearchIcon />}
        >
            Search
        </Button>
    );
};

export default SearchButton;
