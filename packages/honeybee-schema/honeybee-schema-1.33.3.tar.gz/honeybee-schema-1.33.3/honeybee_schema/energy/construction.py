"""Construction Schema"""
from pydantic import Field, constr
from typing import List, Union

from ._base import IDdEnergyBaseModel
from .material import EnergyMaterial, EnergyMaterialNoMass, \
    EnergyWindowMaterialGas, EnergyWindowMaterialGasCustom, \
    EnergyWindowMaterialGasMixture, EnergyWindowMaterialSimpleGlazSys, \
    EnergyWindowMaterialGlazing
from .schedule import ScheduleRuleset, ScheduleFixedInterval


class WindowConstructionAbridged(IDdEnergyBaseModel):
    """Construction for window objects (Aperture, Door)."""

    type: constr(regex='^WindowConstructionAbridged$') = 'WindowConstructionAbridged'

    layers: List[constr(min_length=1, max_length=100)] = Field(
        ...,
        description='List of strings for glazing or gas material identifiers. The '
        'order of the materials is from exterior to interior. If a SimpleGlazSys '
        'material is used, it must be the only material in the construction. '
        'For multi-layered constructions, adjacent glass layers must be separated '
        'by one and only one gas layer.',
        min_items=1,
        max_items=8
    )


class WindowConstruction(WindowConstructionAbridged):
    """Construction for window objects (Aperture, Door)."""

    type: constr(regex='^WindowConstruction$') = 'WindowConstruction'

    materials: List[
        Union[
            EnergyWindowMaterialSimpleGlazSys, EnergyWindowMaterialGlazing,
            EnergyWindowMaterialGas, EnergyWindowMaterialGasCustom,
            EnergyWindowMaterialGasMixture
        ]
    ] = Field(
        ...,
        description='List of glazing and gas materials. The order of the materials '
        'is from outside to inside. If a SimpleGlazSys material is used, it must '
        'be the only material in the construction. For multi-layered constructions, '
        'adjacent glass layers must be separated by one and only one gas layer.',
        min_items=1,
        max_items=8
    )


class OpaqueConstructionAbridged(IDdEnergyBaseModel):
    """Construction for opaque objects (Face, Shade, Door)."""

    type: constr(regex='^OpaqueConstructionAbridged$') = 'OpaqueConstructionAbridged'

    layers: List[constr(min_length=1, max_length=100)] = Field(
        ...,
        description='List of strings for opaque material identifiers. The order '
        'of the materials is from exterior to interior.',
        min_items=1,
        max_items=10
    )


class OpaqueConstruction(OpaqueConstructionAbridged):
    """Construction for opaque objects (Face, Shade, Door)."""

    type: constr(regex='^OpaqueConstruction$') = 'OpaqueConstruction'

    materials: List[Union[EnergyMaterial, EnergyMaterialNoMass]] = Field(
        ...,
        description='List of opaque materials. The order of the materials is '
        'from outside to inside.',
        min_items=1,
        max_items=10
    )


class ShadeConstruction(IDdEnergyBaseModel):
    """Construction for Shade objects."""

    type: constr(regex='^ShadeConstruction$') = 'ShadeConstruction'

    solar_reflectance: float = Field(
        0.2,
        ge=0,
        le=1,
        description=' A number for the solar reflectance of the construction.'
    )

    visible_reflectance: float = Field(
        0.2,
        ge=0,
        le=1,
        description=' A number for the visible reflectance of the construction.'
    )

    is_specular: bool = Field(
        default=False,
        description='Boolean to note whether the reflection off the shade is diffuse '
        '(False) or specular (True). Set to True if the construction is '
        'representing a glass facade or a mirror material.'
    )


class AirBoundaryConstructionAbridged(IDdEnergyBaseModel):
    """Construction for Air Boundary objects."""

    type: constr(regex='^AirBoundaryConstructionAbridged$') = \
        'AirBoundaryConstructionAbridged'

    air_mixing_per_area: float = Field(
        0.1,
        ge=0,
        description='A positive number for the amount of air mixing between Rooms '
        'across the air boundary surface [m3/s-m2]. Default: 0.1 corresponds '
        'to average indoor air speeds of 0.1 m/s (roughly 20 fpm), which is '
        'typical of what would be induced by a HVAC system.'
    )

    air_mixing_schedule: str = Field(
        ...,
        min_length=1,
        max_length=100,
        description='Identifier of a fractional schedule for the air mixing schedule '
        'across the construction.'
    )


class AirBoundaryConstruction(AirBoundaryConstructionAbridged):
    """Construction for Air Boundary objects."""

    type: constr(regex='^AirBoundaryConstruction$') = 'AirBoundaryConstruction'

    air_mixing_schedule: Union[ScheduleRuleset, ScheduleFixedInterval] = Field(
        ...,
        description='A fractional schedule as a ScheduleRuleset or '
        'ScheduleFixedInterval for the air mixing schedule across '
        'the construction.'
    )

    class Config:
        @staticmethod
        def schema_extra(schema, model):
            schema['properties']['air_mixing_schedule']['anyOf'] = \
                [
                    {"$ref": "#/components/schemas/ScheduleRuleset"},
                    {"$ref": "#/components/schemas/ScheduleFixedInterval"}
            ]
