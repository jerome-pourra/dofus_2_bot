import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class StatedElement implements INetworkType
{

	public static readonly protocolId: number = 1041;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public elementId: number = 0;
	public elementCellId: number = 0;
	public elementState: number = 0;
	public onCurrentMap: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return StatedElement.protocolId;
    }

    public isEndpointClient()
    {
        return StatedElement.endpointClient;
    }

    public isEndpointServer()
    {
        return StatedElement.endpointServer;
    }

    public initStatedElement(elementId: number = 0, elementCellId: number = 0, elementState: number = 0, onCurrentMap: boolean = false): StatedElement
    {
        this.elementId = elementId;
        this.elementCellId = elementCellId;
        this.elementState = elementState;
        this.onCurrentMap = onCurrentMap;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatedElement(output);
    }

    public serializeAs_StatedElement(output: ICustomDataOutput)
    {
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element elementId.");
        }
        output.writeInt(this.elementId);
        if(this.elementCellId < 0 || this.elementCellId > 559)
        {
            throw new Error("Forbidden value (" + this.elementCellId + ") on element elementCellId.");
        }
        output.writeVarShort(this.elementCellId);
        if(this.elementState < 0)
        {
            throw new Error("Forbidden value (" + this.elementState + ") on element elementState.");
        }
        output.writeVarInt(this.elementState);
        output.writeBoolean(this.onCurrentMap);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatedElement(input);
    }

    private deserializeAs_StatedElement(input: ICustomDataInput)
    {
        this._elementIdFunc(input);
        this._elementCellIdFunc(input);
        this._elementStateFunc(input);
        this._onCurrentMapFunc(input);
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readInt();
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element of StatedElement.elementId.");
        }
    }

    private _elementCellIdFunc(input: ICustomDataInput)
    {
        this.elementCellId = input.readVarUhShort();
        if(this.elementCellId < 0 || this.elementCellId > 559)
        {
            throw new Error("Forbidden value (" + this.elementCellId + ") on element of StatedElement.elementCellId.");
        }
    }

    private _elementStateFunc(input: ICustomDataInput)
    {
        this.elementState = input.readVarUhInt();
        if(this.elementState < 0)
        {
            throw new Error("Forbidden value (" + this.elementState + ") on element of StatedElement.elementState.");
        }
    }

    private _onCurrentMapFunc(input: ICustomDataInput)
    {
        this.onCurrentMap = input.readBoolean();
    }

}